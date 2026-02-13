# 🔐 anikninja-next-auth

## Overview

**anikninja-next-auth** is a framework-agnostic authentication and authorization manager designed for Next.js applications that consume backend API services such as Laravel, Django, and FastAPI. It provides a standardized, secure, and extensible solution for handling JWT-based authentication, Two-Factor Authentication (2FA), and role- and permission-based access control—without enforcing a specific database schema or user model.

Modern web applications frequently struggle with the complexity of integrating frontend authentication logic with different backend frameworks. Each backend implements authentication, user roles, and permissions in its own way, which leads to duplicated logic, security risks, and inconsistent access control rules across projects. **anikninja-next-auth** addresses this gap by introducing a unified authentication lifecycle and a centralized policy engine that operates consistently across multiple backend technologies.

## Problem Statement

In most real-world projects:
- Backend APIs expose user data with roles (e.g., USER, ADMIN).
- Frontend applications implement custom route protection logic.
- Authorization rules are reimplemented for every project.
- Role checks are scattered across middleware, components, and API calls.
- Two-factor authentication and session management are inconsistent.

This results in:
- Security misconfigurations
- Code duplication
- Poor scalability for multi-tenant or enterprise systems
- Difficult maintenance when roles and permissions evolve

## Solution

anikninja-next-auth provides a complete authentication and authorization lifecycle built around:
- JWT-based authentication
- Optional Two-Factor Authentication (OTP, TOTP, email, or SMS)
- A centralized role and permission policy engine
- Frontend route protection middleware
- Backend framework adapters
- Device and session management
- Optional advanced enterprise features

The system is intentionally designed to be framework-neutral and database-agnostic, allowing each backend to retain its own user model while adopting a common, secure authorization contract.

## Key Features

### Authentication
- JWT access and refresh token handling
- Token rotation and expiration control
- Secure login and logout flows
- 2FA challenge and verification support
- Session and device tracking
- Admin-controlled session revocation

### Authorization
- Role-based access control (RBAC)
- Permission-based access control (PBAC)
- Policy engine for complex rules
- Multi-tenant role support
- Centralized rule configuration (JSON/YAML)
- API-level enforcement and frontend route guards

### Frontend (Next.js)
- Route protection middleware
- Permission guards
- Auth hooks (useAuth)
- Session persistence
- Secure token storage strategies
- SDK for seamless integration

### Backend Integration
- Laravel Sanctum / Passport adapter
- Django authentication adapter
- FastAPI adapter
- Pluggable user provider interface
- No enforced database schema

## Architecture Philosophy

The project is built on three core layers:
1. Core Engine – framework-agnostic authentication, session management, and policy evaluation logic.
2. Adapters – backend-specific implementations for Laravel, Django, and FastAPI that connect their native user systems to the core engine.
3. Frontend SDK – a Next.js-focused SDK that manages authentication lifecycle, route protection, and permission evaluation on both client and server.

This separation ensures:
- High portability
- Strong security boundaries
- Easy extensibility to other frameworks (Ruby on Rails, Node.js, Go APIs)

## Security Design

Security is a primary focus of this project and includes:
- Strict token validation
- Defense against replay attacks
- Short-lived access tokens with refresh strategies
- 2FA enforcement policies
- Centralized policy configuration
- Audit-ready session management
- Zero-trust frontend authorization model

## Target Use Cases

- Admin dashboards
- SaaS applications
- Multi-tenant platforms
- Enterprise systems
- API-driven web applications
- Microservice architectures
- IoT management dashboards

## Vision

The long-term vision of anikninja-next-auth is to become a standard authentication and authorization bridge between Next.js and backend API frameworks—eliminating repetitive security logic and enabling developers to focus on business features instead of reinventing access control for every project.

## Project Goals

- Provide a secure default authentication lifecycle
- Minimize frontend authorization complexity
- Centralize policy and permission management
- Support multiple backend frameworks
- Enable scalable enterprise-grade access control
- Remain fully open-source and extensible
