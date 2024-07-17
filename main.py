from TikTokLive.client.client import TikTokLiveClient
from TikTokLive.client.logger import LogLevel
from TikTokLive.events import ConnectEvent, GiftEvent, CommentEvent, LikeEvent
from flask import Flask
from flask_socketio import SocketIO, emit
import threading
import argparse

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
parser = argparse.ArgumentParser(description="TikTok Live Client with Flask-SocketIO")
parser.add_argument('--unique_id', type=str, required=True, help='Unique ID for TikTok Live Client')
arg = parser.parse_args()

client: TikTokLiveClient = TikTokLiveClient(
    unique_id=arg.unique_id,
)

userGift = []

@client.on(ConnectEvent)
async def on_connect(event: ConnectEvent):
    client.logger.info(f"Connected to @{event.unique_id}!")

@client.on(CommentEvent)
async def on_comment(event: CommentEvent) -> None:
    if event.user.unique_id in userGift:
        print(f"{event.user.unique_id} -> {event.comment}")
        socketio.emit('new_comment', {'user': event.user.unique_id, 'comment': event.comment})
        userGift.remove(event.user.unique_id)

@client.on(GiftEvent)
async def on_gift(event: GiftEvent):
    client.logger.info("Received a gift!")

    if event.gift.streakable and not event.streaking:
        userGift.append(event.user.unique_id)
        print(f"{event.user.unique_id} sent {event.repeat_count}x \"{event.gift.name}\"")

    elif not event.gift.streakable:
        print(f"{event.user.unique_id} sent \"{event.gift.name}\"")

@client.on(LikeEvent)
async def on_like(event: LikeEvent) -> None:
    userGift.append(event.user.unique_id)
    print(f"{event.user.unique_id} Liked a link!")

@app.route('/')
def index():
    return "WebSocket Server is running"

def run_tiktok_client():
    client.logger.setLevel(LogLevel.INFO.value)
    client.run()

if __name__ == '__main__':
    # Run the TikTok client in a separate thread
    tiktok_thread = threading.Thread(target=run_tiktok_client)
    tiktok_thread.start()

    # Run the Flask-SocketIO server
    socketio.run(app, host='0.0.0.0', port=5001, debug=True)
