
const ws = new WebSocket(API_URL);

ws.onopen = function () {
    console.log("✅ Connected to Deriv API!");

    ws.send(JSON.stringify({
        ping: 1
    }));
};

ws.onmessage = function (event) {
    console.log("📩 Response:", event.data);
};

ws.onerror = function (error) {
    console.log("❌ Error:", error);
};

ws.onclose = function () {
    console.log("🔒 Connection closed.");
};
