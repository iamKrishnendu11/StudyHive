package com.studyhive.config;

import javax.net.SocketFactory;
import javax.net.ssl.SSLSocketFactory;
import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;
import java.util.Properties;

/**
 * Custom SocketFactory for Neon PostgreSQL connections on Windows/Cloud environments.
 * Establishes Direct TLS Sockets immediately without waiting for legacy unencrypted SSLRequest negotiation.
 */
public class NeonDirectSslSocketFactory extends SocketFactory {
    private final SSLSocketFactory delegate = (SSLSocketFactory) SSLSocketFactory.getDefault();

    public NeonDirectSslSocketFactory() {}

    public NeonDirectSslSocketFactory(Properties info) {}

    @Override
    public Socket createSocket() throws IOException {
        return delegate.createSocket();
    }

    @Override
    public Socket createSocket(String host, int port) throws IOException {
        Socket socket = delegate.createSocket(host, port);
        socket.setSoTimeout(30000);
        return socket;
    }

    @Override
    public Socket createSocket(String host, int port, InetAddress localHost, int localPort) throws IOException {
        return delegate.createSocket(host, port, localHost, localPort);
    }

    @Override
    public Socket createSocket(InetAddress host, int port) throws IOException {
        return delegate.createSocket(host, port);
    }

    @Override
    public Socket createSocket(InetAddress address, int port, InetAddress localAddress, int localPort) throws IOException {
        return delegate.createSocket(address, port, localAddress, localPort);
    }
}
