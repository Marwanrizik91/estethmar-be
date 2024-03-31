'use strict';

/**
 * project-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-feature.project-feature');
