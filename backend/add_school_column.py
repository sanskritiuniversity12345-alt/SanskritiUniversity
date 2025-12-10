import os
import shutil
import sqlite3
from config import Config

def get_sqlite_path(uri):
    if uri.startswith('sqlite:///'):
        return uri.replace('sqlite:///', '')
    elif uri.startswith('sqlite:'):
        # fallback
        return uri.split(':', 1)[1]
    else:
        return None


def main():
    uri = Config.SQLALCHEMY_DATABASE_URI
    db_path = get_sqlite_path(uri)
    if not db_path:
        print(f"Unsupported DB URI: {uri}")
        return

    if not os.path.exists(db_path):
        print(f"Database file not found: {db_path}")
        return

    backup_path = db_path + '.bak'
    print(f"Backing up DB: {db_path} -> {backup_path}")
    shutil.copy2(db_path, backup_path)

    conn = sqlite3.connect(db_path)
    try:
        cur = conn.cursor()
        cur.execute("PRAGMA table_info('applications');")
        cols = [row[1] for row in cur.fetchall()]
        print("Existing columns:", cols)
        if 'school' in cols:
            print("'school' column already exists — no action taken.")
            return

        print("Adding 'school' column to 'applications' table...")
        cur.execute("ALTER TABLE applications ADD COLUMN school VARCHAR(150);")
        conn.commit()
        print("Column added successfully.")
    except Exception as e:
        print("Error while altering table:", e)
    finally:
        conn.close()

if __name__ == '__main__':
    main()
