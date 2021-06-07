---
title: Open-CMSIS-Pack Project
description: >
   The Open-CMSIS-Pack project delivers the infrastructure to integrate and manage software components and improve code reuse across microcontroller-based projects.
layout: flow
permalink: /
jumbotron:
  title: Open-CMSIS-Pack
  description: >
    Simplifying IoT Workflows and Lifecycle Management
  image: /assets/images/content/iot_planet_under_2mb.jpg
  # inner-image: /assets/images/content/TrustedFirmware-Logo_vertical-white.png
  inner_class: text-center
flow:
  - row: container_row
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h2
          text: Overview
      - format: text
        # style: text-center
        text_content:
          text: |-
            The Open-CMSIS-Pack project will deliver the infrastructure to integrate and manage software components and improve code reuse across embedded and IoT projects. The project is currently hosted and managed as an incubation project by Linaro in partnership with Arm, NXP and ST.

            Software compatibility for component re-use has long been a challenge in the microcontroller space, especially for the IoT, which is much more diverse at the hardware level compared to PCs or the data center. Open-CMSIS-Pack will remove this complexity, delivering a standard for software component packaging and related foundation tools for validation, distribution, integration, management, and maintenance. 
            
            ### What are CMSIS-Packs?
            
            CMSIS-Pack is an effective packaging technology that currently supports close to 9,000 different microcontrollers. They provide a delivery mechanism for software components, device parameters, and evaluation board support. A Software Pack (file collection) includes:

            * Source code, header files, and software libraries
            * Documentation and source code templates
            * Device parameters along with startup code and programming algorithms
            * Example projects
          
            The CMSIS-Pack system solves several problems:

            * It provides meta-data of files that relate to a software component. All files that belong to a software component can be identified and information about the original provider is preserved.
            * It enables consistent software component upgrade and identifies incompatible configuration files that may be part of the user application.
            * Software component providers can specify the interfaces and relationship to other software components.
            * The meta-data of a software component can include dependency information for toolchains, devices, and processors which simplifies the integration into application programs.

            CMSIS-Packs can be used for multiple purposes:
      - format: image
        style: #
        alt: CMSIS-Packs diagram
        size: 8
        path: /assets/images/content/CMSIS-PackDiagram.png
      - format: text
        # style: text-center
        text_content:
          text: |-
            [Click here](https://arm-software.github.io/CMSIS_5/Pack/html/index.html) for further information about CMSIS-Packs.
  - row: container_row
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h2
          text: Timeline
      - format: text
        # style: text-center
        text_content:
          text: |-
            The Open-CMSIS-Pack project was established in April 2021. The roadmap is not finalized, but Linaro and project members expect to deliver the following:

            * Create command-line tools for project builds based on software packs
            * Create workflows and utilities for the verification of software packs
            * Extend the pack description format for better usability across the complete workflow
            * Define processes that simplify the creation of software packs from other sources, such as CMake based projects
            * Develop the concept of a software layer that defines a collection of pre-configured software components
            * Organize the taxonomies of standard APIs that are essential for re-useable software stacks


  - row: container_row
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h2
          text: Resources
      - format: text
        style: #
        text_content:
          text: |-
            For more information about the Open-CMSIS-Pack project, explore the links below

            * [Current CMSIS-Pack specification hosted by Arm](https://arm-software.github.io/CMSIS_5/Pack/html/index.html)
            * [https://www.linaro.org/blog/arm-transfers-cmsis-pack-technology-to-linaro/](https://www.linaro.org/blog/arm-transfers-cmsis-pack-technology-to-linaro/)
  - row: container_row
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h2
          text: Get Involved
      - format: text
        style: #
        text_content:
          text: |-
            If you would like to support and contribute to the Open-CMSIS-Pack project, please contact [us here](mailto:contact@linaro.org).
  - row: container_row
    style: #
    sections:
      - format: title
        style: text-center font-weight-bold
        title_content:
          style: font-weight-bold
          size: h3
          text: Our Members
      - format: custom_include
        source: members.html
---
