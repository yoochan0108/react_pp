import styles from './header.module.scss';
import clsx from 'clsx';
//className에 문자가 변수가 치완되고 있기 떄문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스연결을 삼항연산자로 조건처리도 가능
export default function header() {
	return (
		<header className={clsx(styles.header, 'on')}>
			<h1>Logo</h1>

			<ul>
				<li>Department</li>
				<li>Gallery</li>
				<li>YouTube</li>
				<li>Members</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
