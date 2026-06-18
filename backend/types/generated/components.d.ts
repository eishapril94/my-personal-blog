import type { Schema, Struct } from '@strapi/strapi';

export interface BlogAuthor extends Struct.ComponentSchema {
  collectionName: 'components_blog_authors';
  info: {
    description: 'Blog post author information';
    displayName: 'Author';
    icon: 'user';
  };
  attributes: {
    avatar: Schema.Attribute.Media;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.author': BlogAuthor;
    }
  }
}
