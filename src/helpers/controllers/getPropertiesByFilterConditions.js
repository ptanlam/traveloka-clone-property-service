import Property from '../../models/Property';

export default async function getPropertiesByFilterCondition(conditions) {
  // For pagination
  // eslint-disable-next-line prefer-const
  let { page, limit, ...restConditions } = conditions;
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  if (restConditions) {
    const properties = await Property.find().skip((page - 1) * limit);
    return properties;
  }

  const { location } = restConditions;
  const properties = await Property.find({ location });
  return properties;
}
