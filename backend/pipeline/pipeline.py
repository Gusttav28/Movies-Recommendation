import pandas as pd
from sqlalchemy import create_engine


def load_data(file_path):
    return pd.read_csv(file_path)

def transforming_data(df):
    df.dropna()
    df[df.duplicated()]
    return df


def loading_data(df, db_name):
    connection_string = f'mysql+pymysql://root:30696222@localhost/{db_name}'
    engine = create_engine(connection_string)
    df.to_sql(db_name, con=engine, if_exists='append', index=False)


if __name__ == "__main__":
    raw_df = load_data("movies_dataset2021-2025.csv")
    clean_df = transforming_data(raw_df)
    load_data = loading_data(clean_df, "DBMovies")
    print("Data Successfully merge into mysql")