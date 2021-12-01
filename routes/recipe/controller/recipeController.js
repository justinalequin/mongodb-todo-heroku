const Recipe = require('../model/Recipe')


const fetchRecipe = async (req, res) => {
    try {
      let payload = await Recipe.find(req.body);
  
      res.json({ message: "success", payload });
    } catch (error) {
      res.status(500).json({ message: "failure", error: error.message });
    }
  };

  const deleteRecipe = async (req, res) =>{
      try {
          const {id} = req.params;
          let deletedRecipe = await Recipe.findByIdAndDelete(req.params, id,)
          res.json({message: "success", payload});
      } catch (error){
          res.status(500).json({message: "failure", error: error.message});
      }
  }

  const updateRecipe = async (req, res) =>{
      try{
          let updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, req.params, {new: true,});
          res.json({message: "success", payload: updatedRecipe})
      } catch(error){
          res.status(500).json({message: "failure", message: error.message})
      }
  }

  const createRecipe = async (req, res) =>{
    try{
        const newRecipe = new Recipe({
            recipe: req.body.recipe,
        });

        let savedNewRecipe =  await newRecipe.save();
        res.json({message: "success", payload: savedNewRecipe});
    } catch (error) {
        res.status(500).json({message: "failure", error: error.message});
    }
  }



module.exports = {
    fetchRecipe, updateRecipe, deleteRecipe, createRecipe,
};