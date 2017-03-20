import React, { Component } from 'react';
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';

const content=[
    {
        icon: 'dashboard',
        label: 'Home',
        to: '/',
    },
    {
        icon: 'bell',
        label: 'Ocorrencias',
        content: [
            {
                icon: 'bolt',
                label: 'Abertas',
                content: [
                    {
                        icon: 'bolt',
                        label: 'Mais abertas',
                        to: '/ocorrencias',
                    },
                    {
                        icon: 'bolt',
                        label: 'Mais abert1as',
                        to: '/',
                    },
                    {
                        icon: 'bolt',
                        label: 'Mais a2bertas',
                        to: '/',
                    }
                ],
            },{
                icon: 'bolt',
                label: 'fechadas',
                content: [
                    {
                        icon: 'bolt',
                        label: 'Mais abertas',
                        to: '/',
                    },
                    {
                        icon: 'bolt',
                        label: 'Mais abert1as',
                        to: '/',
                    },
                    {
                        icon: 'bolt',
                        label: 'Mais a2bertas',
                        to: '/',
                    }
                ],
            }
        ]
    }
];

class App extends Component {
	render(){
		return(
			<div>
				{/*<ul className="navigation">*/}
				<div className="navigation">
					<MetisMenu content={content} LinkComponent={RouterLink} classNameContainer="pure" />
				</div>
				{/*</ul>*/}

				<input type="checkbox" id="nav-trigger" className="nav-trigger" />
				<label htmlFor="nav-trigger"></label>

				<div className="site-wrap">
					{this.props.children}
				</div>
			</div>
			);
	}
}

export default App;