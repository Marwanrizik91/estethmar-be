'use strict';

/**
 * greece service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::greece.greece');
