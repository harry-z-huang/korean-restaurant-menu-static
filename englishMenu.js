const appetizers = [
    {id: 1, name: 'goyza', price: 10.99, allergy: '', spice: 0, image: ''}
];

const listApps = () => {
    return [...appetizers]
};

module.exports = {listApps: listApps}