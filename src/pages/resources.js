import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const resources = () => (
	<Layout>
		<div margin="0 auto">
			<h1>Resources</h1>
			<p>
				We often talk about how we need a central repository for all the awesome stuff we find... So here's a place to put <a href="https://en.wikipedia.org/wiki/Link">links!!</a>
			</p>
			<div>
				<h3>Operating System</h3>
				<div>
					<ul>
						<li>Bash command line info essential for Linux/MacOS users <a href="https://www.tldp.org/LDP/abs/html/index.html">Link</a></li>
						<li>Linux Device Drivers, free book <a href="https://lwn.net/Kernel/LDD3/">Link</a></li>
					</ul>
				</div>
				<h3>Webapp</h3>
				<div>
					<h4>Hacking</h4>
					<ul>
						<li>Bugcrowd's awesome webapp hacking resources <a href="https://forum.bugcrowd.com/t/researcher-resources-how-to-become-a-bug-bounty-hunter/1102">Link</a></li>
					</ul>
					<h4>Development</h4>
					<ul>
						<li>React (used for html in javascript, the core of our front end design) <a href="https://reactjs.org/docs/getting-started.html">Link</a></li>
						<li>Gatsby (used for page compiling and deployment) <a href="https://www.gatsbyjs.org/tutorial/">Link</a></li>
						<li>GraphQL (used for string and resource management) <a href="https://graphql.org/learn/">Link</a></li>
						<li>Node (everything listed above runs off this) <a href="https://nodejs.org/en/docs/">Link</a></li>
					</ul>
				</div>
				<h3>Reverse Engineering</h3>
				<div>
					<ul>
						<li>x86 Instruction Set <a href="https://en.wikipedia.org/wiki/X86_instruction_listings">Link</a></li>
					</ul>
				</div>
				<h3>Fun reading</h3>
				<ul>
					<li>Esolang (strange programming languages) <a href="https://www.esolangs.org/">Link</a></li>
				</ul>
				<h3>Youtube Channels</h3>
			</div>
		</div>
	</Layout>
)

export default resources