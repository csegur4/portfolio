function Card (props) {
    return (
        <>
           <div className="rounded overflow-hidden shadow-lg mt-5">
                <img className="w-full" src={props.url} alt={props.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base"> {props.desc}</p>
                </div>
            </div> 
        </>
    );
}

export default Card;