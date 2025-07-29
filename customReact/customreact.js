const { Children } = require("react")

function coustomRendre(reactElement, container) {
   
    // const domElement = document.createElement
    //   (reactElement.type)
    //   domElement.innerHTML = reactElement.Children
    //   domElement.setAttribute('href', reactElement.props.href)
    //   domElement.setAttribute('target', reactElement.props.target)

    //   container.appendChild(domElement)

    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props
            [props] )
    }
    container.appendChild(domElement)
}
 

// const { Children } = require("react")

const reactElement = {
        type: 'a', 
        props: {
            href: 'https://google.com',
            target: '_blank'
        },
        Children: 'Click me to visit googel'
}


const mainContainer = document.querySelector('#root')

coustomRendre(reactElement,  mainContainer)
