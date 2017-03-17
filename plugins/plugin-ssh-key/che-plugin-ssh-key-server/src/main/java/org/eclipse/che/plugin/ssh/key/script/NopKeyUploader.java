package org.eclipse.che.plugin.ssh.key.script;

import org.eclipse.che.api.core.UnauthorizedException;

import java.io.IOException;

public class NopKeyUploader implements SshKeyUploader {
    @Override
    public void uploadKey(String publicKey) throws IOException, UnauthorizedException {
        throw new RuntimeException("Not implemented");
    }

    @Override
    public boolean match(String url) {
        return false;
    }
}
