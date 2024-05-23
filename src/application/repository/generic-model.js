
const GenericModel = Model => ({
    create(data) {
        return Model.create(data);
    },
    get(conditions) {
        return Model.findAll(conditions ? {where:conditions} : {});
    },
    getById(id) {
        return Model.findOne({ where: { id } });
    },
    
    updateById(id, data) {
        return Model.update(data, { where: { id } });
    },
    deleteById(id) {
        return Model.destroy({ where: { id } });
    },
    findOrCreate(condition, newObj){
        return Model.findOrCreate({where:condition, defaults: newObj});
    }
});

export default GenericModel;
