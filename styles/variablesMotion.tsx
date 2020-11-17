const cubicOut = [0.22, 0.61, 0.36, 1];
const cubicIn = [0.55, 0.06, 0.68, 0.19];

export const fadeInScreen = {
  initial : {
		opacity : 0,
		background: '#ffffff',
    y : -10,
		scale: 1.1,
		transition: {
			ease : cubicOut
		}
  },
  animate : {
    opacity : 1,
    y : 0,
		scale: 1,
		transition: {
			ease : cubicIn
		}
  },
  exit : {
    y : -10,
    opacity : 0,
    background: '#ffffff',
		scale: 1.03,
		transition: {
			ease : cubicIn
		}
  }
}

export const fadeIn = {
  initial : {
		opacity : 0,
		transition: {
			type:'spring',
			damping: 0,
			stiffness: 100,
			mass: .35,
			ease : cubicOut,
		}
  },
  animate : {
		opacity : 1,
		transition: {
			type:'spring',
			damping: 100,
			stiffness: 100,
			mass: .2,
			ease : cubicOut,
			duration: .150,
		}
  },
  exit : {
		opacity : 0,
		transition: {
			type:'spring',
			damping: 0,
			stiffness: 100,
			mass: .35,
			ease : cubicOut,
		}
  }
}

export const fadeInLeft = {
  initial : {
    opacity : 0,
		x : -70,
		transition: {
			ease : cubicOut
		}
  },
  animate : {
		opacity : 1,
		x : 0,
		transition: {
			ease : cubicOut
		}
  },
  exit : {
		x : -70,
    opacity : 1,
    background: '#d00',
		transition: {
			ease : cubicOut
		}
  }
}

export const fadeInDown = {
  initial : {
    opacity : 0,
    y : -70,
		background: '#ffffff',
		transition: {
			ease : cubicOut
		}
  },
	animate : {
    opacity : 1,
		y : 0,
		transition: {
			ease : cubicOut
		}
  },
  exit : {
		x : 150,
		opacity : 0,
		background: '#ffffff',
		transition: {
			ease : cubicOut
		}
  }
}

export const CardErased = {
  initial : {
    opacity : 0,
    y : -70,
		background: '#ffffff',
		transition: {
			ease : cubicOut
		}
  },
	animate : {
    opacity : 1,
		y : 0,
		transition: {
			ease : cubicOut
		}
  },
  exit : {
		translateX: '50%',
		background: '#b80000',
		opacity : 0,
		transition: {
			ease : cubicOut,
			duration: .550,
			delay: .30,
		}
  }
}

export const fadeInZ = {
  initial : {
		position: 'absolute',
    width: '100%',
		opacity : 0,
		top: 0,
		left: '50%',
		translateX: '-50%',
		translateY: 0,
		transition: {
			ease : cubicOut,
			duration: .250,
		}
  },
  animate : {
		opacity : 1,
		top: '50%',
		translateY: '-50%',
		transition: {
			ease : cubicOut,
			duration: .250,
			delay: .2
		}
  },
  exit : {
		opacity : 0,
		scale: 1.2,
		transition: {
			ease : cubicOut,
			duration: .150
		}
  }
}

export const fadeInBottom = {
  initial : {
		opacity : 0,
		y: '-10px',
		transition: {
			ease : cubicOut,
			duration: .250,
		}
  },
  animate : {
		opacity : 1,
		y: 0,
		transition: {
			ease : cubicOut,
			duration: .250
		}
  },
  exit : {
		opacity : 0,
		y: '-10px',
		transition: {
			ease : cubicOut,
			duration: .150
		}
  }
}

export const fadeInBottomZ = {
  initial : {
		opacity : 0,
		transition: {
			ease : cubicOut,
			duration: .250,
		}
  },
  animate : {
		opacity : 1,
		transition: {
			ease : cubicOut,
			duration: .250
		}
  },
  exit : {
		opacity : 0,
		transition: {
			ease : cubicOut,
			duration: .150
		}
  }
}

export const stagger = {
  animate : {
    transition: {
			ease : cubicOut,
      staggerChildren : .11
    }
  }
}