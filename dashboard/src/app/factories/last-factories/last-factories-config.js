/*
 * Copyright (c) 2015-2017 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';
const last_factories_controller_1 = require('./last-factories.controller');
const last_factories_directive_1 = require('./last-factories.directive');
class LastFactoriesConfig {
    constructor(register) {
        register.controller('LastFactoriesController', last_factories_controller_1.LastFactoriesController);
        register.directive('cdvyLastFactories', last_factories_directive_1.LastFactories);
    }
}
exports.LastFactoriesConfig = LastFactoriesConfig;
