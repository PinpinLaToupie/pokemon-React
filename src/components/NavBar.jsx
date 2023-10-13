

function NavBar(props) {
    return (
        <div className="navbar">
            <button onClick={props.previous}>Précédent</button>
            <button onClick={props.next}>Suivant</button>
        </div>
    );
}

export default NavBar;