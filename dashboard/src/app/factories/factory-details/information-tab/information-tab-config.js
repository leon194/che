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
const factory_information_controller_1 = require('../information-tab/factory-information/factory-information.controller');
const factory_information_directive_1 = require('../information-tab/factory-information/factory-information.directive');
class InformationTabConfig {
    constructor(register) {
        register.controller('FactoryInformationController', factory_information_controller_1.FactoryInformationController);
        register.directive('cdvyFactoryInformation', factory_information_directive_1.FactoryInformation);
    }
}
exports.InformationTabConfig = InformationTabConfig;
