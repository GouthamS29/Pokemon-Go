function BackDrop(props) {
    const {children , onClose} = props;

    return(
        <div id="backdrop-container"
             onClick={(e) => {
                const element = e.target;
                const id = element.id;
                if(id === "backdrop-container")
                {
                    onClose();
                }
             }}
             style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                background: "rgba(255,255,255,0.4)",
                top: "0px",
                left: "0px",
             }}
        >
            {" "}
            {children}
        </div>
    );
}

export default BackDrop;