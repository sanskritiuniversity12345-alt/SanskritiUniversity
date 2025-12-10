import os
import sys

# Ensure backend dir is on sys.path so imports work when running from project root
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from app import create_app
from models import Admin
from extension import db

app = create_app()
with app.app_context():
    admin = Admin.query.filter_by(email='admin@sanskriti.co.in').first()
    if not admin:
        print('ADMIN_NOT_FOUND')
    else:
        print('ADMIN_FOUND', admin.id, admin.email)
        ph = admin.password_hash or ''
        print('PASSWORD_HASH_PRESENT:', bool(ph), 'LEN:', len(ph))
        try:
            ok = admin.check_password('admin123')
            print("check_password('admin123'):", ok)
        except Exception as e:
            print('check_password raised exception:', type(e).__name__, str(e))
