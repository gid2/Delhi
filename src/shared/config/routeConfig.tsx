import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { UserRole } from 'entities/User/model/types/user';
import { DishList } from 'pages/DishesLIst';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export enum AppRoutes {
    MAIN = 'main',
    MENU = 'menu',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/AboutUs',
    [AppRoutes.MENU]: '/menu',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.MENU]: {
        path: RoutePath.menu,
        element: <DishList />,
    },
};
