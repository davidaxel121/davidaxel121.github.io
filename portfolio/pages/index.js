import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />

			<main>
				<h1>
					David Axel
				</h1>
			</main>

		</div>
	)
}
