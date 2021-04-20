import React, { Component } from 'react';
import Button from './components/Button_Jing'
import Result_profile from './components/Result_profile'

class Result extends Component {
    render() {
        return (
            <div className='result'>

                <div className='result-banner'>
                    <h2>&nbsp; Results &nbsp;</h2>
                    <div>
                        <input type="search" id="result-search" name="q" aria-label="Search through site content"></input>
                        <Button text='Search' colour='yellow'/>
                    </div>
                    
                </div>


                <div className='result-body'>
                    <div className='filter'>
                        <div className='filter-box'>
                            <h1> Sort By</h1>
                                <input type="radio" value="Rating" name="drink-filter" /> Rating
                                <br></br>
                                <input type="radio" value="Most reviewed" name="drink-filter" /> Most reviewed
                                <br></br>
                                <input type="radio" value="Trending" name="drink-filter" /> Trending
                                <br></br>
                        </div>
                    </div>

                    <div className='result-list'>
                        <div className='result-grid'>
                            <Result_profile drink='Coco Chinatown' img={require('./resources/coco.jpg').default} rating='4/5'/> 
                            <Result_profile drink='Gong Cha Randwick' img={require('./resources/shop2.png').default} rating='4.5/5'/>
                            <Result_profile drink='Coco Randwick' img={require('./resources/coco.jpg').default} rating='3.5/5'/>
                            {/*
                            <Result_profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/>
                            <Result_profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/> 
                            <Result_profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/>
                            <Result_profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/>
                            <Result_profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/>
                            */}                                                       
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Result;