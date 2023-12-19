import { Serializer as ПриборУчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриборУчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
