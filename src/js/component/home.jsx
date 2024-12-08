import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const Home = () => {
	const [count, setCount] = useState(10);

	const buttonReset = (count) => {
		return Swal.fire({
			title: "!!El fin del mundo es inevitable¡¡",
			imageUrl: "https://www.freememegenerator.org/uploads/galeria/meme-5-homer-simpson-pane-gerador-de-memes.jpg",
			imageWidth: 400,
			imageHeight: 300,
			text: "En realidad no supe cómo hacerlo 🥲",
			imageAlt: "Custom image"
		  });
	}
	
	useEffect( () => {
		if(count === 0){
			return Swal.fire({
				title: "!No puede ser¡ !Nos quedamos todos calvos¡¡¡",
				imageUrl: "data:image/jpeg;base64,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",
				imageWidth: 400,
				imageHeight: 300,
				imageAlt: "Custom image",
				confirmButtonText: `
    			<i class="fa-solid fa-biohazard"></i> Dale me gusta! <i class="fa-solid fa-circle-radiation"></i>`,
				color: "#f0f2f2",
				background: "url(https://www.cdc.gov/radiation-emergencies/media/images/2024/04/radioactive-hazard.jpg)",
			  });
			};
		setTimeout(() => setCount((count) => count - 1), 1000 );
	}, [count]);

	return (<>
		<body>
			<div className="phrase">
				<p><strong>Quedan {count} segundos para el fin del mundo </strong><i class="fa-solid fa-hourglass-end"></i></p>
			</div>
		</body>
		<button onClick={buttonReset} className="button" >Pulse para resetear</button>
	</>);
};

export default Home;
