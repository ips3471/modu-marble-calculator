import { UpdatingState } from './../assets/interfaces/interfaces';
type LongEnough = number;
class TouchEvent {
	private readonly longEnough: LongEnough = 300;
	private timer: ReturnType<typeof setInterval> | undefined;

	constructor(longEnough: LongEnough) {
		this.longEnough = longEnough;
	}

	touchStart(callback: UpdatingState<boolean>) {
		let tick = this.longEnough;
		this.timer = setInterval(() => {
			if (tick <= 0) {
				this.touchEnd();
				callback(true);
			} else {
				tick -= 100;
			}
		}, 100);
	}

	touchEnd() {
		this.timer && clearInterval(this.timer);
	}
}

export default TouchEvent;
