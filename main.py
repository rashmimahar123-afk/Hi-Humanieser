import http.server
import ssl

# Set the port and address
address = ('0.0.0.0', 8000)

# Create the standard HTTP request handler
handler = http.server.SimpleHTTPRequestHandler

# Create the server object
httpd = http.server.HTTPServer(address, handler)

# Wrap the socket with SSL
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(
    certfile='certificate.crt',
    keyfile='private.key'
)
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Serving HTTPS on https://localhost:8000")
httpd.serve_forever()