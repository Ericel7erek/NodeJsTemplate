import GenericModel from '@Application/repository/generic-model';
import Schema from './schema';

const Model = {
    ...GenericModel(Schema),
    getByEmail: email => Schema.findOne({ where: { email } })
};

export default Model;

