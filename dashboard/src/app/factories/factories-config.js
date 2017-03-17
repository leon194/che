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
const factory_details_config_1 = require('./factory-details/factory-details-config');
const create_factory_config_1 = require('./create-factory/create-factory-config');
const last_factories_config_1 = require('./last-factories/last-factories-config');
const list_factories_controller_1 = require('./list-factories/list-factories.controller');
const factory_item_controller_1 = require('./list-factories/factory-item/factory-item.controller');
const factory_item_directive_1 = require('./list-factories/factory-item/factory-item.directive');
const load_factory_controller_1 = require('./load-factory/load-factory.controller');
const load_factory_service_1 = require('./load-factory/load-factory.service');
class FactoryConfig {
    constructor(register) {
        register.controller('ListFactoriesController', list_factories_controller_1.ListFactoriesController);
        register.controller('FactoryItemController', factory_item_controller_1.FactoryItemController);
        register.directive('cdvyFactoryItem', factory_item_directive_1.CheFactoryItem);
        register.controller('LoadFactoryController', load_factory_controller_1.LoadFactoryController);
        register.service('loadFactoryService', load_factory_service_1.LoadFactoryService);
        // config routes
        register.app.config(function ($routeProvider) {
            $routeProvider.accessWhen('/factories', {
                title: 'Factories',
                templateUrl: 'app/factories/list-factories/list-factories.html',
                controller: 'ListFactoriesController',
                controllerAs: 'listFactoriesCtrl'
            })
                .accessWhen('/load-factory', {
                title: 'Load Factory',
                templateUrl: 'app/factories/load-factory/load-factory.html',
                controller: 'LoadFactoryController',
                controllerAs: 'loadFactoryController'
            })
                .accessWhen('/load-factory/:id', {
                title: 'Load Factory',
                templateUrl: 'app/factories/load-factory/load-factory.html',
                controller: 'LoadFactoryController',
                controllerAs: 'loadFactoryController'
            });
        });
        // config files
        new factory_details_config_1.FactoryDetailsConfig(register);
        new create_factory_config_1.CreateFactoryConfig(register);
        new last_factories_config_1.LastFactoriesConfig(register);
    }
}
exports.FactoryConfig = FactoryConfig;
