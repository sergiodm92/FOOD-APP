const server = require('./src/app.js');
const { conn, Diet} = require('./src/db.js');
const PORT = process.env.PORT || 3001; 
// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

// Syncing all the models at once.



const getAllDiets = async () => {
  const types = await Diet.findAll({
    attributes: ['id', 'title', 'description']
});

if(types.length==0){
  let vegetarianDiet = Diet.create({
    title: "Vegetarian",
    description: "No ingredients may contain meat or meat by-products, such as bones or gelatin."
  });
  
  let veganDiet = Diet.create({
    title: "Vegan",
    description: "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey."
  });
  
  let glutenFreeDiet = Diet.create({
    title: "gluten free",
    description: "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)."
  });
  
  let paleoDiet = Diet.create({
    title: "Paleo",
    description: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods."
  });
  
  let ketogenicDiet = Diet.create({
    title: "ketogenic",
    description: "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not."
  });
  
  let lactoOvoVegetarianDiet = Diet.create({
    title: "lacto ovo vegetarian",
    description: "All ingredients must be vegetarian and none of the ingredients can be or contain egg."
  });
  
  let pescetarianDiet = Diet.create({
    title: "Pescatarian",
    description: "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not."
  });
  
  let primalDiet = Diet.create({
    title: "primal",
    description: "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc."
  });
  
  let whole30Diet = Diet.create({
    title: "Whole30",
    description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds"
  });

  let paleolithic = Diet.create({
    title: "paleolithic",
    description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds"
  });

  let dairyfree = Diet.create({
    title: "dairy free",
    description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds"
  });
  
  let fodmapfriendly = Diet.create({
    title: "fodmap friendly",
    description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds"
  });
  

  Promise.all([vegetarianDiet, veganDiet, glutenFreeDiet, fodmapfriendly, paleolithic, whole30Diet, primalDiet, pescetarianDiet, lactoOvoVegetarianDiet, ketogenicDiet, paleoDiet, dairyfree])
    .then(res => {
      console.log("Preloaded diets"); 
    })
  }
}

getAllDiets()

  
});
