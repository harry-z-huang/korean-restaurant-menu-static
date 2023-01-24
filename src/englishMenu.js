const appetizers = [
    {id: 1, name: 'goyza', price: 10.99, allergy: '', spice: 0, image: '{process.env.PUBLIC_URL + "/DSC04218.JPG"}'}
];

// {process.env.PUBLIC_URL + "/DSC04218.JPG"}

const listApps = () => {
    return [...appetizers]
};

module.exports = {listApps: listApps}