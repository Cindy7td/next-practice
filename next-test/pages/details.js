import React, { Component } from 'react';
import MyCardDetail from 'components/base/CardDetail'
import Link from 'next/link'

export default class  Dashboard extends Component {

  render() {

    switch (MyCard.id) {
      case "1":
        return (
          <div>
            <Link href="/"><button> Back </button></Link>
            <MyCardDetail id = "1" title = "Terminar la practica de web "  date = "10/15/20" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."
            status = "Done" asignee = "Cindy" asigner = "Daniel" /> 
          </div>
        )
        break;
      case 2:
        return (
          <div>
            <Link href="/"><button> Back </button></Link>
            <MyCardDetail id = "2" title = "Subir el repo "  date = "10/15/20" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."
            status = "In Progress" asignee = "Yessica" asigner = "Daniel" /> 
          </div>
        )
        break;
      case 3:
        return (
          <div>
            <Link href="/"><button> Back </button></Link>
            <MyCardDetail id = "3" title = "Enviar al profe "  date = "10/15/20" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."
            status = "To Do" asignee = "Ricardo" asigner = "Daniel" /> 
          </div>
        )
        break;
      default:
        return (
          <div>
            <Link href="/"><button> Back </button></Link>
            <MyCardDetail id = "1" title = "Terminar la practica de web "  date = "10/15/20" 
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."
            status = "Done" asignee = "Cindy" asigner = "Daniel" /> 
          </div>
        )
        break;
    }
  }
}
