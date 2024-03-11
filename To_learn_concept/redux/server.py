from http.server import BaseHTTPRequestHandler, HTTPServer
import json

note_data = {"notes": []}  # This will store the note in memory.


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def _set_headers(self, code=200):
        self.send_response(code)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        self._set_headers()
        self.wfile.write(json.dumps(note_data).encode())

    # def do_POST(self):
    #     content_length = int(self.headers['Content-Length'])
    #     post_data = json.loads(self.rfile.read(content_length))
    #     note_data["note"] = post_data.get("note", "")
    #     self._set_headers()
    #     self.wfile.write(json.dumps(
    #         {"status": "Note saved successfully"}).encode())

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = json.loads(self.rfile.read(content_length))
        note = post_data.get("note", "")
        if note:  # Only add non-empty notes
            note_data["notes"].append(note)
        self._set_headers()
        self.wfile.write(json.dumps(
            {"status": "Note saved successfully", "note": note}).encode())


def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting httpd on port {port}...')
    httpd.serve_forever()


if __name__ == "__main__":
    run()
