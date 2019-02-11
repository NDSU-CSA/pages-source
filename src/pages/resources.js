import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

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
					<h4>Vulnerable Operating Systems</h4>
					<ul>
						<li><a href="https://www.vulnhub.com/entry/the-necromancer-1,154/">Necromancer</a> - Great beginner boot2root with a story</li>
						<li><a href="https://www.vulnhub.com/entry/rickdiculouslyeasy-1,207/">RickdiculouslyEasy</a> - Easy Rick and Morty themed boot2root</li>
						<li><a href="https://information.rapid7.com/download-metasploitable-2017.html">Metasploitable 2</a> - An intentionally vulnerable operating system</li>
					</ul>
					<h4>Tutorials and Guides</h4>
					<ul>
						<li><a href="https://www.tldp.org/LDP/abs/html/index.html">Bash command line info </a> - Essential for Linux/MacOS users</li>
						<li><a href="https://lwn.net/Kernel/LDD3/">Linux Device Drivers </a> - Free book on writing Linux drivers</li>
					</ul>
				</div>
				<h3>Webapp</h3>
				<div>
					<h4>Hacking</h4>
					<ul>
						<li><a href="https://forum.bugcrowd.com/t/researcher-resources-how-to-become-a-bug-bounty-hunter/1102">Webapp hacking howto</a> - Resources from Bugcrowd</li>
						<li><a href="https://www.hacksplaining.com/exercises">Hacksplaining</a> - High quality web hacking tutorials and countermeasures</li>
					</ul>
					<h4>Development</h4>
					<ul>
						<li><a href="https://reactjs.org/docs/getting-started.html">React</a> - Used for html in javascript, the core of our front end design</li>
						<li><a href="https://www.gatsbyjs.org/tutorial/">Gatsby</a> - Used for page compiling and deployment</li>
						<li><a href="https://graphql.org/learn/">GraphQL</a> - Used for string and resource management</li>
						<li><a href="https://nodejs.org/en/docs/">Node JS</a> - Everything listed above runs off this</li>
					</ul>
				</div>
				<h3>Blue Team</h3>
				<div>
					<h4>Tools</h4>
					<ul>
						<li><a href="https://www.fail2ban.org/wiki/index.php/Main_Page">Fail2ban</a> - Automatically ban IP addresses</li>
						<li><a href="https://docs.microsoft.com/en-us/sysinternals/downloads/sysmon">Sysmon</a> - System monitor for Windows</li>
					</ul>
				</div>
				<h3>Reverse Engineering</h3>
				<div>
					<h4>Reference</h4>
					<ul>
						<li><a href="https://en.wikipedia.org/wiki/X86_instruction_listings">x86 Instruction Set</a> - The most common architecture seen in consumer PCs</li>
					</ul>
					<h4>Tools</h4>
					<ul>
						<li><a href="https://www.fireeye.com/services/freeware/apatedns.html">ApateDNS</a> - A phony DNS server</li>
						<li><a href="http://www.angusj.com/resourcehacker/">Resource Hacker</a> - A resource editor for 32bit and 64bit Windows applications</li>
						<li><a href="https://www.aldeid.com/wiki/PEView">PEview</a> - A tool for quickly and easily getting the structure and content of a portable executable</li>
					</ul>
					<h4>Practice</h4>
					<ul>
						<li><a href="https://microcorruption.com/login">Microcorruption</a> - Embedded systems CTF</li>
						<li><a href="https://crackmes.one/">Crackmes</a> - A place to download crackmes to improve RE skills</li>
					</ul>
				</div>
				<h3>Fun reading</h3>
				<div>
					<ul>
						<li><a href="https://esolangs.org/wiki/Language_list">Esolang</a> - Strange programming languages</li>
						<li><a href="https://xkcd.com/">XKCD</a> - Well known STEM comics good for wasting time</li>
					</ul>
				</div>
				<h3>Reddit</h3>
				<div>
					<ul>
						<li><a href="https://www.reddit.com/r/netsec/">Netsec</a> - A thread for network security</li>
						<li><a href="https://www.reddit.com/r/ProgrammerHumor/">Programmerhumor</a> - A great place to make fun of Javascript</li>
						<li><a href="https://www.reddit.com/r/securityctf">Securityctf</a> - CTF teams, walkthroughs and schedules</li>
					</ul>
				</div>
				<h3>Movies/TV/Hack Culture</h3>
				<div>
					<h4>Movies</h4>
					<ul>
						<li><a href="https://www.imdb.com/title/tt0113243/"><i>Hackers</i></a> - A movie about hackers in the 90's</li>
						<li><a href="https://www.imdb.com/title/tt0092099/"><i>Top Gun</i></a> - Navy pilot school</li>
						<li><a href="https://www.imdb.com/title/tt0086567/"><i>War Games</i></a> - A kid almost starts a war with Russia by hacking a goverment war simulation</li>
						<li><a href="https://www.imdb.com/title/tt0133093/"><i>The Matrix</i></a> - The title says it all</li>
					</ul>
					<h4>Shows</h4>
					<ul>
						<li><a href="https://www.imdb.com/title/tt4158110/"><i>Mr. Robot</i></a> - TV series about underground hackers</li>
					</ul>
				</div>
				<h3>Youtube</h3>
				<div>
					<ul>
						<li><a href="https://www.youtube.com/user/JackkTutorials">Jackk Tutorials</a> - In depth walkthroughs covering many topics</li>
						<li><a href="https://www.youtube.com/channel/UChlfPtuG7T6mnG7-iD-5JVA">Z Hacker</a> - High production value walkthroughs for hacking tools</li>
						<li><a href="https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w">LiveOverflow</a> - Intermediate level hacking and reverse engineering videos</li>
					</ul>
				</div>
				<h3>CTFs</h3>
				<div>
					<ul>
						<li><a href="https://ctftime.org/">CTF Time</a> - A website with a calender of upcoming and ongoing CTF challenges</li>
						<li><a href="https://www.hackthebox.eu/">Hack The Box</a> - A CTF with a variety of ongoing challenges and boxes to pentest</li>
						<li><a href="https://www.hackthissite.org/">Hack This Site</a> - A site to be hacked</li>
					</ul>
				</div>
			</div>
		</div>
	</Layout>
)

export default resources
