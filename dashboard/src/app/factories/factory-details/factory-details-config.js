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
const factory_details_controller_1 = require('../factory-details/factory-details.controller');
const information_tab_config_1 = require('./information-tab/information-tab-config');
class FactoryDetailsConfig {
    constructor(register) {
        register.controller('FactoryDetailsController', factory_details_controller_1.FactoryDetailsController);
        // config routes
        register.app.config(($routeProvider) => {
            let locationProvider = {
                title: 'Factory',
                templateUrl: 'app/factories/factory-details/factory-details.html',
                controller: 'FactoryDetailsController',
                controllerAs: 'factoryDetailsController'
            };
            $routeProvider.accessWhen('/factory/:id', locationProvider)
                .accessWhen('/factory/:id/:tabName', locationProvider);
        });
        // config files
        new information_tab_config_1.InformationTabConfig(register);
    }
}
exports.FactoryDetailsConfig = FactoryDetailsConfig;
