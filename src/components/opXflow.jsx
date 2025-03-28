import React from "react";
import deploymentFlow from "../assets/project workflow.png";
 // Ensure the image is in public or src folder
 
const OpXFlow = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center p-4 md:p-8"
      style={{
        background: "linear-gradient(90deg, rgba(29,158,200,1) 0%, rgba(110,46,149,0.826) 93%)",
      }}
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">OpsXFlow Project</h1>

      

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mb-6">
        {/* Tools & Technologies */}
        <div className="bg-gray-100 shadow-lg shadow-black rounded-lg p-4 md:p-8 w-full md:w-2/2 text-left mb-4 md:mb-0 md:mr-4">
          <h2 className="text-xl md:text-2xl font-bold text-violet-800 mb-2">Tools & Technologies Used</h2>
          <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
            <li><strong>Front End:</strong> React, Tailwind CSS</li>
            <li><strong>Containerization:</strong> Docker</li>
            <li><strong>CI/CD Pipeline:</strong> GitHub Actions, Jenkins</li>
            <li><strong>GitOps Deployment:</strong> ArgoCD</li>
            <li><strong>Infrastructure as Code:</strong> Terraform</li>
            <li><strong>Cloud Platform:</strong> Google Kubernetes Engine (GKE)</li>
            <li><strong>Container Registry:</strong> Google Container Registry (GCR) / Artifact Registry</li>
            <li><strong>Security & Vulnerability Scanning:</strong> Trivy</li>
          </ul>
        </div>

        {/* Team Members */}
        <div className="bg-gray-100 shadow-lg shadow-black rounded-lg p-4 md:p-8 w-full md:w-2/2 text-left">
          <h2 className="text-xl md:text-2xl font-bold text-violet-800 mb-2">Team Members</h2>
          <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
            <li><strong>Front End Development : </strong> Srikar & Manasa</li>
            <li><strong>Docker Image Building : </strong> Navateja & Uday</li>
            <li><strong>CI/CD Pipeline : </strong> Chiranjeevi</li>
            <li><strong>Infrastructure : </strong> Shirish , Sudhakar & Chiranjeevi </li>
            <li><strong>Kubernetes : </strong> Santhosh , Srikar & Manasa </li>
          </ul>
        </div>
      </div>


      {/* Deployment Flow */}
      <div className="bg-gray-100 shadow-lg shadow-black rounded-lg p-4 md:p-6 max-w-6xl w-full">
        <h2 className="text-2xl md:text-2xl font-bold text-violet-800 mb-4">Deployment Flow</h2>
        
        <img 
          src={deploymentFlow} 
          alt="Deployment Flow" 
          className="w-full h-auto rounded-lg shadow-md mb-4 object-contain" 
        />
        
        <p className="text-cyan-700 text-sm md:text-base leading-relaxed">
          For the front-end development, we utilize <strong>React</strong> and <strong>Tailwind CSS</strong> to build a modern, responsive, and dynamic user interface.
          Once the application is developed, the <strong>Docker team</strong> takes over, containerizing it by building a <strong>Docker image</strong>.
        </p>
        <p className="text-cyan-700 text-sm md:text-base leading-relaxed mt-4">
          Next, the <strong>CI/CD pipeline</strong> ensures a secure, efficient, and automated deployment process using GitHub Actions and ArgoCD.
        </p>
        <p className="text-cyan-700 text-sm md:text-base leading-relaxed mt-4">
          Finally, the <strong>infrastructure team</strong> implements Terraform scripts to deploy the <strong>Docker image</strong> to <strong>Google Kubernetes Engine (GKE)</strong>.
        </p>
      </div>
    </div>
  );
};

export default OpXFlow;