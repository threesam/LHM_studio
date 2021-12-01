// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import document schemas
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import editor from './documents/editor'
import service from './documents/service'
import project from './documents/project'
import press from './documents/press'
import pamphlet from './documents/pamphlet'
import quote from './documents/quote'
import banner from './documents/banner'
import textBlock from './documents/textBlock'

// Import object schemas
import blockContent from './objects/blockContent'
import contactInfo from './objects/contactInfo'
import mainImage from './objects/mainImage'
import cta from './objects/cta'
import color from './objects/color'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // documents
    siteSettings,
    page,
    editor,
    service,
    press,
    pamphlet,
    project,
    quote,
    banner,
    textBlock,
    // objects
    blockContent,
    contactInfo,
    mainImage,
    cta,
    color
  ]),
})
