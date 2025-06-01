// a refaire pas besoin de classe
export class EventNameParser {
  static parseResolverName(resolverName: string, entityId?: string): string {
    const match = resolverName.match(/(create|update|delete|upsert)(One|Many)([A-Z][a-zA-Z]+)/);
    if (!match) {
      throw new Error(`Invalid resolver name: ${resolverName}`);
    }

    const [, action, , entity] = match;
    const formattedEntity = entity
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, ''); // e.g., JobOffer -> job-offer

    const formattedAction = {
      create: 'created',
      update: 'updated',
      delete: 'deleted',
      upsert: 'upserted',
    }[action];

    return entityId
      ? `${formattedEntity}.${entityId}.${formattedAction}`
      : `${formattedEntity}.${formattedAction}`;
  }
}