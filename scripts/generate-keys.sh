#!/usr/bin/env bash
echo "Generating keys (placeholder)"
openssl genpkey -algorithm RSA -out rsa_private.pem -pkeyopt rsa_keygen_bits:2048 || true
echo "Done"
