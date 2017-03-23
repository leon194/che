/*******************************************************************************
 * Copyright (c) 2012-2017 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 *******************************************************************************/
package org.eclipse.che.plugin.github.factory.resolver;

import javax.validation.constraints.NotNull;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Parser of String Github URLs and provide {@link GithubUrl} objects.
 *
 * @author Florent Benoit
 */
public class GithubUrlParser {

    /**
     * Regexp to find repository details (repository name, project name and branch and subfolder)
     * Examples of valid URLs are in the test class.
     */
    protected static final Pattern
            GITHUB_PATTERN = Pattern.compile(
            "^(?:http)(?:s)?(?:\\:\\/\\/)github.com/(?<repoUser>[^/]++)/(?<repoName>[^/]++)(?:/tree/(?<branchName>[^/]++)(?:/(?<subFolder>.*))?)?$");


    /**
     * Check if the provided URL is a valid Github url or not
     *
     * @param url
     *         a not null string representation of URL
     * @return true if the given URL is a github URL
     */
    public boolean isValid(@NotNull String url) {
        return GITHUB_PATTERN.matcher(url).matches();
    }

    /**
     * Provides a github URL object allowing to extract some part of the URL.
     *
     * @param url
     *         URL to transform into a managed object
     * @return managed github url {@link GithubUrl}.
     */
    public GithubUrl parse(String url) {
        // Apply github url to the regexp
        Matcher matcher = GITHUB_PATTERN.matcher(url);
        if (!matcher.matches()) {
            throw new IllegalArgumentException(String.format(
                    "The given github url %s is not a valid URL github url. It should start with https://github.com/<user>/<repo>",
                    url));
        }

        return new GithubUrl().username(matcher.group("repoUser")).repository(matcher.group("repoName")).branch(matcher.group("branchName"))
                              .subfolder(matcher.group("subFolder"));

    }
}