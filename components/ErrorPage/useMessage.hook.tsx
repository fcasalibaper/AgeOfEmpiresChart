const useMessage = (status) => {
	let title;
	let subtitle;
	switch (status) {
		case 404:
			title = "No podemos encontrar la página que buscás." 
			subtitle = "Por favor, volvé a intentarlo o revisá que la dirección esté bien."
			return [title, subtitle]
			break;
		case 503:
			title = "Se produjo un error en el servicio." 
			subtitle = "Temporamente el servidor se encuentra inhabilitado. Por favor, volvé a intentarlo en unos minutos."
			return [title, subtitle]
			break;
		case 500:
			title = "Algo salió mal.",
			subtitle = "Por favor, volvé a intentarlo en unos minutos."
			return [title, subtitle]
			break;
		default:
			title = "Hubo un error." 
			subtitle = "Por favor, volvé a intentarlo o revisá que la dirección esté bien."
			return [title, subtitle]
			break;
	}
}

export default useMessage;