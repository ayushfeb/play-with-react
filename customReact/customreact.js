function customRender(reactElement, container){
    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Clicked me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)


