import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getRecipesId } from '../../actions/index';
import { Link } from 'react-router-dom';
import chef from '../../img/chef.png';
import '../Home/Home.css'
import './details.css'
import '../Home/Home.css'
import Loading from '../Loading/Loading';

function Details({
	match: {
	params: { id },
	},
}) 
{
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipeById);


useEffect(() => {dispatch(getRecipesId(id))}, [dispatch, id]);

	return (
		<div>
				    <div className='recipe-container'>
					<Link to='/home' className='link'>
					<div >
                    <button className="btn-search" >Home</button>
                    </div>
					</Link>
					{!recipe? <Loading> </Loading> :
					<div className="container-div">
					
						<div className='divtitledetail'>
						<p className="detail-title">{recipe.title}</p>
						</div>
						<div className='detail-container'>
                            {recipe.image ? <img src={recipe.image} alt="not found1" /> : <img src={chef} alt="not found2" />}
								<div className='detail-scores'>
									<p className='title'>
										{recipe.score && 
											`⭐Score: ${recipe.score} Points`}
									</p>
									<p className='title'>
										{recipe.healthScore &&
											`🍏 HealthScore: ${recipe.healthScore}%`}
									</p>
									<p className='title'>🕐 Time: {recipe.readyInMinutes+" minutes"} </p>
								</div>
								<div className='detail-scores'>
                                    {recipe.diets && 
									recipe.diets.map(d => <h5 className='h3'> 🍜 {d} </h5>
                                    )}
								</div>
							<div className='detail-recipe'>
								<p>{recipe.summary && 'Summary:'}</p>
								<div className='detail-summary'>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.summary,
										}}
									/>
								</div>
								<p>{recipe.instructions && 'Instructions:'}</p>
								<div className='detail-recipe'>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.instructions,
										}}
									/>
								</div>
							</div>
						</div>
						</div>
					}
					</div>
				
				 
		</div>
  );
};

export default Details;