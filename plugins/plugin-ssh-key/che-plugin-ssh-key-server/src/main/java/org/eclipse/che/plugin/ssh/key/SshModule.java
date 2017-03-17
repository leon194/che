package org.eclipse.che.plugin.ssh.key;

import com.google.inject.AbstractModule;
import com.google.inject.multibindings.Multibinder;

import org.eclipse.che.plugin.ssh.key.script.NopKeyUploader;
import org.eclipse.che.plugin.ssh.key.script.SshKeyUploader;

/**
 * Created by sj on 17.03.17.
 */
public class SshModule extends AbstractModule {
    @Override
    protected void configure() {
        bind(SshServiceClient.class).to(HttpSshServiceClient.class);

        bind(org.eclipse.che.plugin.ssh.key.script.SshKeyProvider.class)
                .to(org.eclipse.che.plugin.ssh.key.script.SshKeyProviderImpl.class);

        Multibinder.newSetBinder(binder(), SshKeyUploader.class).addBinding().to(NopKeyUploader.class);
    }
}
