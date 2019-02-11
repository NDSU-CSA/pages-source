import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

const ez = () => (
	<Layout>
	<div id="main">
		<h1>Getting Started With Cyber Security</h1>
		<p>
			Hello! This page is intended to serve as a reference for those who 
			are new to cyber security and are looking to get informed on the fundamentals
			Before you get hacking, there are a couple quick things you need to do:
		</p>
		<div>
			<ol>
				<li>Pick and set up the tools you will need</li>
				<li>Make sure that what you are about to do is legal/ethical</li>
			</ol>
		</div>
		<h2>Setting up Kali and Related Tools</h2>
		<div>
			<h3>What is Kali Linux?</h3>
			<div>
				<p>
					Linux is an operating system. An operating system is a powerful program that runs other
					programs, automatically sets up connected hardware, and provides a way for users to run their
					applications with ease. Most people should be familiar with Microsoft Windows or MacOS. One of these
					operating systems are typically installed by default on new a computer, however it is possible to
					install a new operating system on a computer, which can be selected when booting the computer. MacOS
					and Windows are not free nor open source, that is, a license costs money and you do not get the source
					code.
				</p>
				<p>
					Linux is a free and open source operating system created by Linus Torvalds. Because the operating system is 
					open source, the operating system is developed and maintained by a large group of highly intelligent people. 
					This has resulted in Linux becoming a very well designed operating system. What is even better is that many people have 
					taken the code and built 
					their own version of Linux customized for special purposes. Different variations and distributions of Linux are
					known as <b>distros</b>. This means that Linux distros exist for all types of computing needs, from large datacenters
					to robotics to Android phones.
				</p>
				<h4>Here are some of our favorite Linux distros:</h4>
				<div id="linux-distros-table">
					<table>
						<tr>
							<th>Distro</th>
							<th>Description</th>
							<th>Website</th>
						</tr>
						<tr>
							<td>Kali</td>
							<td>For security and hacking purposes</td>
							<td><a href="https://www.kali.org/">https://www.kali.org/</a></td>
						</tr>
						<tr>
							<td>Ubuntu</td>
							<td>User-friendly general purpose operating system</td>
							<td><a href="https://www.ubuntu.com/">https://www.ubuntu.com/</a></td>
						</tr>
						<tr>
							<td>Raspian</td>
							<td>A linux operating system for the Raspberry Pi</td>
							<td><a href="https://www.raspberrypi.com/">https://www.raspberrypi.com/</a></td>
						</tr>
					</table>
				</div>
				<br/>
				<p>
					One such distro is Kali Linux, a distribution built specifically
					 for hacking. The operating system is free and can be 
					downloaded from the link above. As you might suspect, installing
					 an operating system is not the same as installing a typical
					application. In essence, you have a few options:
				</p>
				<div id="install-kali-options">
					<ul>
						<li>Install onto a virtual machine</li>
						<li>Install over your current operating system</li>
						<li>Install alongside your current operating system</li>
					</ul>
				</div>

				<br/>
			</div>
			<h3>Installing Kali Linux</h3>
			<div>
				<p>
					For the purposes of this guide, we will install Kali on a virtual 
					machine. This is the cleanest and safest approach because the
					system is contained in a virtual environment which can be restarted 
					without disturbing your host computer. There is also risk of overwriting
					data on the host computer when installing directly to disk, which can 
					lead to system failure or loss of your homework.
				</p>
				<h4>Installing VMware</h4>
				<p>
					Go <a href="https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/15_0">
					here</a> to install VMware
					Workstation Player, free for non-commercial use. The installation is straight forward, just use 
					the default settings and launch it.
				</p>
				<h4>What is VMware Workstation?</h4>
				<p>
					VMware Workstation Player is an application that allows you to 
					make your own virtual machines. These virtual machines
					are just like regular computers, a monitor pops up in a window and 
					you can log in, go on the internet or run programs. The
					advantage of using a virtual machine is isolation and flexibility. 
					On a virtual machine, the hardware is all virtual, so it
					can be swapped out by scroll-down menus and ticking check boxes. 
					Virtualized hardware also means that viruses cannot spread
					to the host by copying itself to different places in the filesystem. 
					The host is completely seperated from the virtual machine,
					unless explicitly set to be connected.
				</p>
				<p><i>
					Note: Virtualization software sometimes have vulnerabilities. 
					While most activities should be safe in a VM, dont get
					careless. Exploits exist that can give a program access to the host, 
					and while the vulnerabilities that these exploits use are
					quickly patched by the organizations that provide the software, 
					these exploits can lurk in the dark unknown to the company.
					These exploits are known as zero days.
				</i></p>
				<p>

				</p>
				<h4>Download the Kali Linux image</h4>
				<p>
					If you haven't already, go <a href="https://www.kali.org/downloads/">here </a> 
					and click 'HTTP' from the table on the row that says
					'Kali Linux 64 Bit' in the 'Image Name' column to download a Kali Linux ISO. 
					Make sure to save it to somewhere that you can find it; it 
					might make sense to make a new folder for ISO's.
				</p>
				<p><i>
					Note: An ISO is an image, meaning that it is an exact byte copy of something 
					(not to be confused with a picture). In our situation, this something 
					is an operating system that can be booted from. Images can be a copy of any 
					file, as long as it is an exact copy byte-for-byte.
				</i></p>
			</div>
		</div>
		<h2>Legal and Ethical Concerns</h2>
		<div>
			<p>
				A wise man once said: "Its easier to ask for forgiveness than permission"... 
				This is <b>not</b> the case here. In the hacking world, bad behavior
				can get you in more trouble than you can simply apologize your way out of. 
				Ethics are key to a hacker, as the line between white hat and black hat
				hacking is thin, and people not in the field often cannot tell the difference. 
				With the current laws, there is always some risk that even the most
				ethical of hacking could get you a knock at the door.
			</p>
			<p>
				This is why it is important to check if you are allowed to do whatever it is you are doing; 
				if you can prove that you are following Acceptable Use Policies, Code of Conduct and ethical 
				standards. Below is the link to our page ".
			</p>
		</div>
		<h2>More Information</h2>
		<div>
			<a href="https://github.com/torvalds/linux">Linux source code in a Github repository</a>
			<a href="https://wikipedia.org/"></a>
		</div>
	</div>
	</Layout>
)

export default ez
