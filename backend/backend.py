"""
Backend for Portfolio
"""
import http.server
import json
import socketserver

# Read json file
with open(r'backend\portfolio.json', encoding='utf-8') as file:
    portfolio = json.load(file)

class MyHandler(http.server.SimpleHTTPRequestHandler):
    """
    Handler for HTTP requests
    """
    def do_GET(self):
        """
        Handle GET requests
        """
        if self.path == '/portfolio':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Origin, Content-Type')
            self.end_headers()
            self.wfile.write(json.dumps(portfolio).encode())
        else:
            super().do_GET()

PORT = 8000

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
